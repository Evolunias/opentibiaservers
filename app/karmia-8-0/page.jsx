import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("karmia-8-0");
}

export default function Page() {
  return <LegacyServerRoute slug="karmia-8-0" />;
}
