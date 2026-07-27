import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-open-tibia-server-usa');
}

export default function HighExpOpenTibiaServerUsaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-open-tibia-server-usa" />;
}
