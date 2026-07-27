import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-4-high-exp-server');
}

export default function Cyntara84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-4-high-exp-server" />;
}
