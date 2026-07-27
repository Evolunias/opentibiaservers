import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-12-high-exp-server');
}

export default function Cyntara12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-12-high-exp-server" />;
}
