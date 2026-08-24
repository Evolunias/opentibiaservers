import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("midhem-online");
}

export default function Page() {
  return <CanonicalServerRoute slug="midhem-online" />;
}
