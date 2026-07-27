import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-retro-server-mexico');
}

export default function RealestaRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realesta-retro-server-mexico" />;
}
