import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-retro-server-uk');
}

export default function ThorniaRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="thornia-retro-server-uk" />;
}
