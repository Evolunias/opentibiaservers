import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("valmorots-launch-1-march-2026");
}

export default function Page() {
  return <CanonicalServerRoute slug="valmorots-launch-1-march-2026" />;
}
