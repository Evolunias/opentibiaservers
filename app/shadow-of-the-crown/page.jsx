import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("shadow-of-the-crown");
}

export default function Page() {
  return <LegacyServerRoute slug="shadow-of-the-crown" />;
}
