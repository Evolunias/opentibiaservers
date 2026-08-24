import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("grimoria3-rubinot");
}

export default function Page() {
  return <LegacyServerRoute slug="grimoria3-rubinot" />;
}
