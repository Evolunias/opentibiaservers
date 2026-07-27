import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-open-tibia-server-poland');
}

export default function HighExpOpenTibiaServerPolandKeywordPage() {
  return <StaticKeywordPage slug="high-exp-open-tibia-server-poland" />;
}
