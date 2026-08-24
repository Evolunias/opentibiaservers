import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("dragora-online-7-92-fresh-start-may-15");
}

export default function Page() {
  return <LegacyServerRoute slug="dragora-online-7-92-fresh-start-may-15" />;
}
