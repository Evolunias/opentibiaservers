import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-mexico-servers');
}

export default function ElderaMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-mexico-servers" />;
}
