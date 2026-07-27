import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-retro-server-mexico');
}

export default function NilotRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nilot-retro-server-mexico" />;
}
