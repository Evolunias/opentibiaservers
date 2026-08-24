import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("modukot");
}

export default function Page() {
  return <CanonicalServerRoute slug="modukot" />;
}
