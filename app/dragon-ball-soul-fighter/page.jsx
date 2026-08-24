import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("dragon-ball-soul-fighter");
}

export default function Page() {
  return <LegacyServerRoute slug="dragon-ball-soul-fighter" />;
}
