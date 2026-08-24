import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("nostalrius-on-nostalrius-com-br");
}

export default function Page() {
  return <LegacyServerRoute slug="nostalrius-on-nostalrius-com-br" />;
}
