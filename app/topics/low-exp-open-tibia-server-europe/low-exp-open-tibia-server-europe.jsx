import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-open-tibia-server-europe');
}

export default function LowExpOpenTibiaServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="low-exp-open-tibia-server-europe" />;
}
