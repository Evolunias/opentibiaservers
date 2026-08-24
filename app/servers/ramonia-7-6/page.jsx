import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("ramonia-7-6");
}

export default function Page() {
  return <CanonicalServerRoute slug="ramonia-7-6" />;
}
