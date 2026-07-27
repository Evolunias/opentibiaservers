import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-baiak-server-brazil');
}

export default function MistOfDeathBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-baiak-server-brazil" />;
}
