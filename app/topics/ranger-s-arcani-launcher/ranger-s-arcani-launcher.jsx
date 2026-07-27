import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-launcher');
}

export default function RangerSArcaniLauncherKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-launcher" />;
}
