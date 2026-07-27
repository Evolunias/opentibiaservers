import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-fresh-start-server-france');
}

export default function OtmadnessFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="otmadness-fresh-start-server-france" />;
}
