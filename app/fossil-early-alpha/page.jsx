import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("fossil-early-alpha");
}

export default function Page() {
  return <LegacyServerRoute slug="fossil-early-alpha" />;
}
