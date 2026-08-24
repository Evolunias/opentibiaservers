import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("miracle-7-4");
}

export default function Page() {
  return <CanonicalServerRoute slug="miracle-7-4" />;
}
