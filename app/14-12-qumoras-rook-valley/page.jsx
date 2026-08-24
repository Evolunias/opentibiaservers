import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("14-12-qumoras-rook-valley");
}

export default function Page() {
  return <LegacyServerRoute slug="14-12-qumoras-rook-valley" />;
}
