import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-fresh-start-server-usa');
}

export default function OtmadnessFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-fresh-start-server-usa" />;
}
