import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-retro-server-mexico');
}

export default function OxygenotRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-retro-server-mexico" />;
}
