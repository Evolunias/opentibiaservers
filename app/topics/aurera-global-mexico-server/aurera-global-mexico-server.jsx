import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-mexico-server');
}

export default function AureraGlobalMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-mexico-server" />;
}
