import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-retro-server-north-america');
}

export default function ThorniaRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-retro-server-north-america" />;
}
