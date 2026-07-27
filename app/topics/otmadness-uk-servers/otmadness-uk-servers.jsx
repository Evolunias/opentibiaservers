import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-uk-servers');
}

export default function OtmadnessUkServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-uk-servers" />;
}
