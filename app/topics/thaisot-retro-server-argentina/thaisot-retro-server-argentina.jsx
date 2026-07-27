import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-retro-server-argentina');
}

export default function ThaisotRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-retro-server-argentina" />;
}
