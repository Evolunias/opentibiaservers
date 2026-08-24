import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("tibiaorigins-2-0");
}

export default function Page() {
  return <CanonicalServerRoute slug="tibiaorigins-2-0" />;
}
