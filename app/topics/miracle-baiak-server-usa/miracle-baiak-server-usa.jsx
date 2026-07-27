import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-baiak-server-usa');
}

export default function MiracleBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="miracle-baiak-server-usa" />;
}
