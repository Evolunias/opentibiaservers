import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("august-13th-2022");
}

export default function Page() {
  return <CanonicalServerRoute slug="august-13th-2022" />;
}
