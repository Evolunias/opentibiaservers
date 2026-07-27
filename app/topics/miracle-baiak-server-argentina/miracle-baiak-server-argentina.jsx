import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-baiak-server-argentina');
}

export default function MiracleBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="miracle-baiak-server-argentina" />;
}
