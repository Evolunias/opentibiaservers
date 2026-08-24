import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("classick-drakoria-starts-friday-17th");
}

export default function Page() {
  return <LegacyServerRoute slug="classick-drakoria-starts-friday-17th" />;
}
