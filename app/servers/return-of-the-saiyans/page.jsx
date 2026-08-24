import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("return-of-the-saiyans");
}

export default function Page() {
  return <CanonicalServerRoute slug="return-of-the-saiyans" />;
}
