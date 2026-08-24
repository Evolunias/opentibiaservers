import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("grimoria2-rubinot");
}

export default function Page() {
  return <CanonicalServerRoute slug="grimoria2-rubinot" />;
}
