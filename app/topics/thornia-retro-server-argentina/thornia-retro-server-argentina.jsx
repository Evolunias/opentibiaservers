import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-retro-server-argentina');
}

export default function ThorniaRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thornia-retro-server-argentina" />;
}
