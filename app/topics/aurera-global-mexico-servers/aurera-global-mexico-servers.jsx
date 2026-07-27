import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-mexico-servers');
}

export default function AureraGlobalMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-mexico-servers" />;
}
