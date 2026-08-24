import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("tibia-8-0-low-rate");
}

export default function Page() {
  return <CanonicalServerRoute slug="tibia-8-0-low-rate" />;
}
