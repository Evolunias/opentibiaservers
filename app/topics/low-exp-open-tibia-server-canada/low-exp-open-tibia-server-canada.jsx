import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-open-tibia-server-canada');
}

export default function LowExpOpenTibiaServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-open-tibia-server-canada" />;
}
