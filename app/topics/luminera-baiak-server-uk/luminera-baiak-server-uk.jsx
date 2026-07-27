import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-baiak-server-uk');
}

export default function LumineraBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="luminera-baiak-server-uk" />;
}
