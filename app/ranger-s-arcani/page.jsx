import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("ranger-s-arcani");
}

export default function Page() {
  return <LegacyServerRoute slug="ranger-s-arcani" />;
}
