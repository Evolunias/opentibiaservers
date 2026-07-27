import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-open-tibia-server-mexico');
}

export default function LowExpOpenTibiaServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="low-exp-open-tibia-server-mexico" />;
}
