import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("foxworld-server-1");
}

export default function Page() {
  return <LegacyServerRoute slug="foxworld-server-1" />;
}
