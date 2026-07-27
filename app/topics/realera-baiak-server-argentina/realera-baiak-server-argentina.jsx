import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-baiak-server-argentina');
}

export default function RealeraBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realera-baiak-server-argentina" />;
}
