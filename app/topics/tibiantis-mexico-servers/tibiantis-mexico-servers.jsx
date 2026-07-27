import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-mexico-servers');
}

export default function TibiantisMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-mexico-servers" />;
}
