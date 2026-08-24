import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("valdareth-8-0-custom-war-server");
}

export default function Page() {
  return <CanonicalServerRoute slug="valdareth-8-0-custom-war-server" />;
}
