import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-11-high-exp-server');
}

export default function Cyntara11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-11-high-exp-server" />;
}
