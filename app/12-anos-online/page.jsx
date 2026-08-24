import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("12-anos-online");
}

export default function Page() {
  return <LegacyServerRoute slug="12-anos-online" />;
}
