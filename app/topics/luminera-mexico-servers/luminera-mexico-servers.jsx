import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-mexico-servers');
}

export default function LumineraMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-mexico-servers" />;
}
