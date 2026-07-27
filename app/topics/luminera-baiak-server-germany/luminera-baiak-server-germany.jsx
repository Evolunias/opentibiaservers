import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-baiak-server-germany');
}

export default function LumineraBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="luminera-baiak-server-germany" />;
}
