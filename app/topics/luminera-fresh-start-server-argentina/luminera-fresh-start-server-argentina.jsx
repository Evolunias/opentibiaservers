import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-fresh-start-server-argentina');
}

export default function LumineraFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="luminera-fresh-start-server-argentina" />;
}
