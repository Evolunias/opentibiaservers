import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-retro-server-mexico');
}

export default function RealeraRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realera-retro-server-mexico" />;
}
