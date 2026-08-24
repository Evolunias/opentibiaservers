import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("road-to-shinigami");
}

export default function Page() {
  return <LegacyServerRoute slug="road-to-shinigami" />;
}
