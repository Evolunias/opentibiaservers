import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("crownots-low-rate-4fun-server");
}

export default function Page() {
  return <LegacyServerRoute slug="crownots-low-rate-4fun-server" />;
}
