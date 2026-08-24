import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("mist-of-death-reset");
}

export default function Page() {
  return <CanonicalServerRoute slug="mist-of-death-reset" />;
}
