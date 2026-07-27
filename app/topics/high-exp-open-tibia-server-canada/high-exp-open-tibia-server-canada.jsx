import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-open-tibia-server-canada');
}

export default function HighExpOpenTibiaServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-open-tibia-server-canada" />;
}
