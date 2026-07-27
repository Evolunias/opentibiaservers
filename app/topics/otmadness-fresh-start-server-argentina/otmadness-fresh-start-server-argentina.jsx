import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-fresh-start-server-argentina');
}

export default function OtmadnessFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-fresh-start-server-argentina" />;
}
