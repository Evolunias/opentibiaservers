import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-baiak-server-mexico');
}

export default function MistOfDeathBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-baiak-server-mexico" />;
}
