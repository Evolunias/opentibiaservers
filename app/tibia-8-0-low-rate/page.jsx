import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("tibia-8-0-low-rate");
}

export default function Page() {
  return <LegacyServerRoute slug="tibia-8-0-low-rate" />;
}
