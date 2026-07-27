import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-open-tibia-server-germany');
}

export default function HighExpOpenTibiaServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="high-exp-open-tibia-server-germany" />;
}
