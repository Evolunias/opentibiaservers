import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-98-high-exp-server');
}

export default function Cyntara1098HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-98-high-exp-server" />;
}
