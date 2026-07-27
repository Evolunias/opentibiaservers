import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-uptime');
}

export default function RangerSArcaniUptimeKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-uptime" />;
}
