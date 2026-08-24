import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("the-best-global-8-60");
}

export default function Page() {
  return <CanonicalServerRoute slug="the-best-global-8-60" />;
}
