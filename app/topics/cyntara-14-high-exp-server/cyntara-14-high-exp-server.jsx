import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-14-high-exp-server');
}

export default function Cyntara14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-14-high-exp-server" />;
}
