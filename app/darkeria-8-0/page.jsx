import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("darkeria-8-0");
}

export default function Page() {
  return <LegacyServerRoute slug="darkeria-8-0" />;
}
