import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-retro-server-canada');
}

export default function NilotRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nilot-retro-server-canada" />;
}
