import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-baiak-server-france');
}

export default function MistOfDeathBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-baiak-server-france" />;
}
