import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-launch');
}

export default function RangerSArcaniLaunchKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-launch" />;
}
