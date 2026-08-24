import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("runes-of-soul");
}

export default function Page() {
  return <LegacyServerRoute slug="runes-of-soul" />;
}
