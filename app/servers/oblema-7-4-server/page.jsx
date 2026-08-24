import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("oblema-7-4-server");
}

export default function Page() {
  return <CanonicalServerRoute slug="oblema-7-4-server" />;
}
