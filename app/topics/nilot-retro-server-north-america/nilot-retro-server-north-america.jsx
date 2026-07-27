import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-retro-server-north-america');
}

export default function NilotRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-retro-server-north-america" />;
}
