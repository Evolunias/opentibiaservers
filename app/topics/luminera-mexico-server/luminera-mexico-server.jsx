import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-mexico-server');
}

export default function LumineraMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-mexico-server" />;
}
