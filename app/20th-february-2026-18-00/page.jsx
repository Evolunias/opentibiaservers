import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("20th-february-2026-18-00");
}

export default function Page() {
  return <LegacyServerRoute slug="20th-february-2026-18-00" />;
}
