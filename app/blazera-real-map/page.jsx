import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("blazera-real-map");
}

export default function Page() {
  return <LegacyServerRoute slug="blazera-real-map" />;
}
