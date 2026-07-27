import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-baiak-server-argentina');
}

export default function LumineraBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="luminera-baiak-server-argentina" />;
}
