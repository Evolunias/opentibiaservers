import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("serenian4-rubinot");
}

export default function Page() {
  return <LegacyServerRoute slug="serenian4-rubinot" />;
}
