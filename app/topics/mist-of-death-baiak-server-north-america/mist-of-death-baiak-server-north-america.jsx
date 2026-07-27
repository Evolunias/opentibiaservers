import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-baiak-server-north-america');
}

export default function MistOfDeathBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-baiak-server-north-america" />;
}
