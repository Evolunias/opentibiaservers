import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("return-of-the-saiyans");
}

export default function Page() {
  return <LegacyServerRoute slug="return-of-the-saiyans" />;
}
