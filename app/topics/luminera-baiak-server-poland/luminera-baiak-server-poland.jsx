import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-baiak-server-poland');
}

export default function LumineraBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="luminera-baiak-server-poland" />;
}
