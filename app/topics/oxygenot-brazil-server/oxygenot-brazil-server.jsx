import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-brazil-server');
}

export default function OxygenotBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-brazil-server" />;
}
