import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("bravora-exordion");
}

export default function Page() {
  return <CanonicalServerRoute slug="bravora-exordion" />;
}
