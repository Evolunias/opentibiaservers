import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-13-high-exp-server');
}

export default function Cyntara13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-13-high-exp-server" />;
}
