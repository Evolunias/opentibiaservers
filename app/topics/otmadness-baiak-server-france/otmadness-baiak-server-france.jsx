import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-baiak-server-france');
}

export default function OtmadnessBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="otmadness-baiak-server-france" />;
}
