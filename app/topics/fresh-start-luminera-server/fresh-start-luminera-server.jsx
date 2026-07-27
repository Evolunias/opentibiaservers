import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-luminera-server');
}

export default function FreshStartLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-luminera-server" />;
}
