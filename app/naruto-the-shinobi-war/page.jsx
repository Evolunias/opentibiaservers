import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("naruto-the-shinobi-war");
}

export default function Page() {
  return <LegacyServerRoute slug="naruto-the-shinobi-war" />;
}
