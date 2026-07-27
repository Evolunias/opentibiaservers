import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-fresh-start-server-sweden');
}

export default function LumineraFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="luminera-fresh-start-server-sweden" />;
}
