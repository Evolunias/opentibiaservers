import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-luminera-server');
}

export default function BestLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="best-luminera-server" />;
}
