import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("roxor-1337-8-6");
}

export default function Page() {
  return <CanonicalServerRoute slug="roxor-1337-8-6" />;
}
