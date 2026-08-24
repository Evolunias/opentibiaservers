import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("grand-opening-of-whispers-of-solitude-30-1-2026");
}

export default function Page() {
  return <CanonicalServerRoute slug="grand-opening-of-whispers-of-solitude-30-1-2026" />;
}
