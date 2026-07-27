import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-15-high-exp-server');
}

export default function Cyntara15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-15-high-exp-server" />;
}
