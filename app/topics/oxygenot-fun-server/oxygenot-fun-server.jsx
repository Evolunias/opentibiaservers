import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-fun-server');
}

export default function OxygenotFunServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-fun-server" />;
}
