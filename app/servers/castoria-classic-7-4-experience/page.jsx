import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("castoria-classic-7-4-experience");
}

export default function Page() {
  return <CanonicalServerRoute slug="castoria-classic-7-4-experience" />;
}
