import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("titania-7-4");
}

export default function Page() {
  return <CanonicalServerRoute slug="titania-7-4" />;
}
