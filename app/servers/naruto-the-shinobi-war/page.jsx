import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("naruto-the-shinobi-war");
}

export default function Page() {
  return <CanonicalServerRoute slug="naruto-the-shinobi-war" />;
}
