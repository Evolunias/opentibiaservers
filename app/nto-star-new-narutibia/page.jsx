import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("nto-star-new-narutibia");
}

export default function Page() {
  return <LegacyServerRoute slug="nto-star-new-narutibia" />;
}
