import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("euro-karma");
}

export default function Page() {
  return <CanonicalServerRoute slug="euro-karma" />;
}
