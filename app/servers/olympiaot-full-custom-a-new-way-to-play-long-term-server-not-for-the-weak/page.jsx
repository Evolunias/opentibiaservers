import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("olympiaot-full-custom-a-new-way-to-play-long-term-server-not-for-the-weak");
}

export default function Page() {
  return <CanonicalServerRoute slug="olympiaot-full-custom-a-new-way-to-play-long-term-server-not-for-the-weak" />;
}
