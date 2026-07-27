import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-retro-server-france');
}

export default function NilotRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nilot-retro-server-france" />;
}
