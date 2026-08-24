import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("mythibia-v2");
}

export default function Page() {
  return <LegacyServerRoute slug="mythibia-v2" />;
}
