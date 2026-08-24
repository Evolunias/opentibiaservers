import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("crownots-start-on-feb-28th-18-00-cet");
}

export default function Page() {
  return <LegacyServerRoute slug="crownots-start-on-feb-28th-18-00-cet" />;
}
