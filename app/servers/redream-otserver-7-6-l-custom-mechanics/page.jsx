import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("redream-otserver-7-6-l-custom-mechanics");
}

export default function Page() {
  return <CanonicalServerRoute slug="redream-otserver-7-6-l-custom-mechanics" />;
}
