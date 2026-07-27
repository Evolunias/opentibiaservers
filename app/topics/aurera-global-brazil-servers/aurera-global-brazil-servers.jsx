import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-brazil-servers');
}

export default function AureraGlobalBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-brazil-servers" />;
}
