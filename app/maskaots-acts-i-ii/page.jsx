import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("maskaots-acts-i-ii");
}

export default function Page() {
  return <LegacyServerRoute slug="maskaots-acts-i-ii" />;
}
