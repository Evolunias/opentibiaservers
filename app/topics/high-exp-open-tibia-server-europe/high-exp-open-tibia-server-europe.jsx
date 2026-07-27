import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-open-tibia-server-europe');
}

export default function HighExpOpenTibiaServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="high-exp-open-tibia-server-europe" />;
}
