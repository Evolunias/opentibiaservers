import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-uk-server');
}

export default function OtmadnessUkServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-uk-server" />;
}
