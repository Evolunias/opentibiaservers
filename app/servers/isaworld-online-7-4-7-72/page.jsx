import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("isaworld-online-7-4-7-72");
}

export default function Page() {
  return <CanonicalServerRoute slug="isaworld-online-7-4-7-72" />;
}
