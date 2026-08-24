import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("celenium-rubinot");
}

export default function Page() {
  return <CanonicalServerRoute slug="celenium-rubinot" />;
}
