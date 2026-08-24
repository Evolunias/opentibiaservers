import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("zamoniaot-rl-map");
}

export default function Page() {
  return <CanonicalServerRoute slug="zamoniaot-rl-map" />;
}
