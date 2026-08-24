import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("furia");
}

export default function Page() {
  return <LegacyServerRoute slug="furia" />;
}
