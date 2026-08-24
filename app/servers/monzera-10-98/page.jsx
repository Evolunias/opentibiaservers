import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("monzera-10-98");
}

export default function Page() {
  return <CanonicalServerRoute slug="monzera-10-98" />;
}
