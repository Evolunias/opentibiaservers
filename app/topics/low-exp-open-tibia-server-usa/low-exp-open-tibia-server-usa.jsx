import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-open-tibia-server-usa');
}

export default function LowExpOpenTibiaServerUsaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-open-tibia-server-usa" />;
}
