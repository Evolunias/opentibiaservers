import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-baiak-server-canada');
}

export default function MistOfDeathBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-baiak-server-canada" />;
}
