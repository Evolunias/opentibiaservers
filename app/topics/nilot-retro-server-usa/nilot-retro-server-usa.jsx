import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-retro-server-usa');
}

export default function NilotRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nilot-retro-server-usa" />;
}
