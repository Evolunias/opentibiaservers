import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-brazil-server');
}

export default function AureraGlobalBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-brazil-server" />;
}
