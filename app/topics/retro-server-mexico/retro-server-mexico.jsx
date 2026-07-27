import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-mexico');
}

export default function RetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="retro-server-mexico" />;
}
