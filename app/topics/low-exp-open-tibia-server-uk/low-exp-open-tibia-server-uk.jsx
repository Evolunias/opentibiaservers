import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-open-tibia-server-uk');
}

export default function LowExpOpenTibiaServerUkKeywordPage() {
  return <StaticKeywordPage slug="low-exp-open-tibia-server-uk" />;
}
