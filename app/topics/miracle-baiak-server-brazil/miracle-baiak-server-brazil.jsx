import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-baiak-server-brazil');
}

export default function MiracleBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="miracle-baiak-server-brazil" />;
}
