import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("aegis-exordion");
}

export default function Page() {
  return <LegacyServerRoute slug="aegis-exordion" />;
}
