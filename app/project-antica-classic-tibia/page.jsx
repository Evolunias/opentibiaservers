import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("project-antica-classic-tibia");
}

export default function Page() {
  return <LegacyServerRoute slug="project-antica-classic-tibia" />;
}
