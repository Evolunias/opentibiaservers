import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("ikasera-war-launch-28-february");
}

export default function Page() {
  return <CanonicalServerRoute slug="ikasera-war-launch-28-february" />;
}
