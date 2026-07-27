import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-retro-server-mexico');
}

export default function ImperianicRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="imperianic-retro-server-mexico" />;
}
