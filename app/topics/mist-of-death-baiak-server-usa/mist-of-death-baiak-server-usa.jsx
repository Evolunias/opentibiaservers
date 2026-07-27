import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-baiak-server-usa');
}

export default function MistOfDeathBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-baiak-server-usa" />;
}
