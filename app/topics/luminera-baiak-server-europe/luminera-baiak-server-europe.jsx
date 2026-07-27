import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-baiak-server-europe');
}

export default function LumineraBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="luminera-baiak-server-europe" />;
}
