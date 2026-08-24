import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("sagaot-starts-july-26th-build-freedom");
}

export default function Page() {
  return <CanonicalServerRoute slug="sagaot-starts-july-26th-build-freedom" />;
}
