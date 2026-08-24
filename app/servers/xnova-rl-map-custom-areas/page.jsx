import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("xnova-rl-map-custom-areas");
}

export default function Page() {
  return <CanonicalServerRoute slug="xnova-rl-map-custom-areas" />;
}
