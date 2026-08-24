import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("original-legend-of-bleach");
}

export default function Page() {
  return <LegacyServerRoute slug="original-legend-of-bleach" />;
}
