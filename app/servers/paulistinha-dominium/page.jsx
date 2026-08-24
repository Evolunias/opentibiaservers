import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("paulistinha-dominium");
}

export default function Page() {
  return <CanonicalServerRoute slug="paulistinha-dominium" />;
}
