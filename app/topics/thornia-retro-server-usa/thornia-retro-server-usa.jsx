import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-retro-server-usa');
}

export default function ThorniaRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thornia-retro-server-usa" />;
}
