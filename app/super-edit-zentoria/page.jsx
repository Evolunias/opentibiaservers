import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("super-edit-zentoria");
}

export default function Page() {
  return <LegacyServerRoute slug="super-edit-zentoria" />;
}
