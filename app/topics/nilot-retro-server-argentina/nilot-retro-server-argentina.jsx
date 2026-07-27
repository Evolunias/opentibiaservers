import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-retro-server-argentina');
}

export default function NilotRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nilot-retro-server-argentina" />;
}
