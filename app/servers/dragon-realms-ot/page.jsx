import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("dragon-realms-ot");
}

export default function Page() {
  return <CanonicalServerRoute slug="dragon-realms-ot" />;
}
