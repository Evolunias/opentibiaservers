import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("minibia-tibia-7-6-in-your-browser-mobile-desktop");
}

export default function Page() {
  return <CanonicalServerRoute slug="minibia-tibia-7-6-in-your-browser-mobile-desktop" />;
}
