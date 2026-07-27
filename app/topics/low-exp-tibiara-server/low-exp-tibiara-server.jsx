import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-tibiara-server');
}

export default function LowExpTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-tibiara-server" />;
}
