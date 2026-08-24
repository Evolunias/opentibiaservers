import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("ardera-8-0-lunaris");
}

export default function Page() {
  return <LegacyServerRoute slug="ardera-8-0-lunaris" />;
}
