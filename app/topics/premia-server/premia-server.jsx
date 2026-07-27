import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('premia-server');
}

export default function PremiaServerKeywordPage() {
  return <StaticKeywordPage slug="premia-server" />;
}
