import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("naruto-shinobi-fight");
}

export default function Page() {
  return <LegacyServerRoute slug="naruto-shinobi-fight" />;
}
