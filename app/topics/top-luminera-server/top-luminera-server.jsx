import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-luminera-server');
}

export default function TopLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="top-luminera-server" />;
}
