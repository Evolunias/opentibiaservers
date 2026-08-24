import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("custom-map");
}

export default function Page() {
  return <CanonicalServerRoute slug="custom-map" />;
}
