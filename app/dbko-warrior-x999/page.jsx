import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("dbko-warrior-x999");
}

export default function Page() {
  return <LegacyServerRoute slug="dbko-warrior-x999" />;
}
