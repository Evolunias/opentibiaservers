import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("treasura-long-term-x1-start-12-04-2024-at-18-00-cest");
}

export default function Page() {
  return <CanonicalServerRoute slug="treasura-long-term-x1-start-12-04-2024-at-18-00-cest" />;
}
