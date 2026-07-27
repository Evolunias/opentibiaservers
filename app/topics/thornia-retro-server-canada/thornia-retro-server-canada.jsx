import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-retro-server-canada');
}

export default function ThorniaRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thornia-retro-server-canada" />;
}
