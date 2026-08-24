import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("naruto-shinobi-fight");
}

export default function Page() {
  return <CanonicalServerRoute slug="naruto-shinobi-fight" />;
}
