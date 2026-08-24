import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("shadow-of-the-crown");
}

export default function Page() {
  return <CanonicalServerRoute slug="shadow-of-the-crown" />;
}
