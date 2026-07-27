import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-retro-server-france');
}

export default function ThorniaRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thornia-retro-server-france" />;
}
