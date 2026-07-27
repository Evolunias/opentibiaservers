import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-retro-server-brazil');
}

export default function NilotRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nilot-retro-server-brazil" />;
}
