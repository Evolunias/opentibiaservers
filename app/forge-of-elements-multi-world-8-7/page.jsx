import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("forge-of-elements-multi-world-8-7");
}

export default function Page() {
  return <LegacyServerRoute slug="forge-of-elements-multi-world-8-7" />;
}
