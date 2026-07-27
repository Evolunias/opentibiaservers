import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-baiak-server-latin-america');
}

export default function MistOfDeathBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-baiak-server-latin-america" />;
}
