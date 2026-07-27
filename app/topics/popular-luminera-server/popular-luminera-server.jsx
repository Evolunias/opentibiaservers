import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-luminera-server');
}

export default function PopularLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="popular-luminera-server" />;
}
