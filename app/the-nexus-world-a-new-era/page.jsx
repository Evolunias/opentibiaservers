import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("the-nexus-world-a-new-era");
}

export default function Page() {
  return <LegacyServerRoute slug="the-nexus-world-a-new-era" />;
}
