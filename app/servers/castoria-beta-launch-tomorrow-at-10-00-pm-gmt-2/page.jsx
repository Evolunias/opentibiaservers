import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("castoria-beta-launch-tomorrow-at-10-00-pm-gmt-2");
}

export default function Page() {
  return <CanonicalServerRoute slug="castoria-beta-launch-tomorrow-at-10-00-pm-gmt-2" />;
}
