import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("demolidores");
}

export default function Page() {
  return <LegacyServerRoute slug="demolidores" />;
}
