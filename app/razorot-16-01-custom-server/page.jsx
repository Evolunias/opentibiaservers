import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("razorot-16-01-custom-server");
}

export default function Page() {
  return <LegacyServerRoute slug="razorot-16-01-custom-server" />;
}
