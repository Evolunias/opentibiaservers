import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-1-high-exp-server');
}

export default function Cyntara81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-1-high-exp-server" />;
}
