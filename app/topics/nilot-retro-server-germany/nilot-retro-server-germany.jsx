import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-retro-server-germany');
}

export default function NilotRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nilot-retro-server-germany" />;
}
