import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-72-high-exp-server');
}

export default function Cyntara772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-72-high-exp-server" />;
}
