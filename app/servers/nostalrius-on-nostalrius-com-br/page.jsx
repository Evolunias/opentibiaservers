import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("nostalrius-on-nostalrius-com-br");
}

export default function Page() {
  return <CanonicalServerRoute slug="nostalrius-on-nostalrius-com-br" />;
}
