import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("nto-shinobi-tales");
}

export default function Page() {
  return <LegacyServerRoute slug="nto-shinobi-tales" />;
}
