import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("realesta-7-4");
}

export default function Page() {
  return <LegacyServerRoute slug="realesta-7-4" />;
}
