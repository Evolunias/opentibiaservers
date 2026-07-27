import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-retro-server-mexico');
}

export default function ThorniaRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="thornia-retro-server-mexico" />;
}
