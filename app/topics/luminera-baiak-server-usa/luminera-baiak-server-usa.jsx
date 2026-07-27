import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-baiak-server-usa');
}

export default function LumineraBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="luminera-baiak-server-usa" />;
}
