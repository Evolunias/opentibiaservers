import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("drakoria-80");
}

export default function Page() {
  return <LegacyServerRoute slug="drakoria-80" />;
}
