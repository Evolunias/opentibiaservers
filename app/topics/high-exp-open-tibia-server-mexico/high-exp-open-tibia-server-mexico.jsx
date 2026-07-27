import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-open-tibia-server-mexico');
}

export default function HighExpOpenTibiaServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="high-exp-open-tibia-server-mexico" />;
}
