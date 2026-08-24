import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("8-0-freebia-online-lowrate-20-06-2026");
}

export default function Page() {
  return <CanonicalServerRoute slug="8-0-freebia-online-lowrate-20-06-2026" />;
}
