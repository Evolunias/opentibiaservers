import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("cronots");
}

export default function Page() {
  return <CanonicalServerRoute slug="cronots" />;
}
