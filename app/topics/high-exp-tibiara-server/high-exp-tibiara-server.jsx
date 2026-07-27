import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-tibiara-server');
}

export default function HighExpTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-tibiara-server" />;
}
