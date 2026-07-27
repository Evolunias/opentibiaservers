import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-retro-server-poland');
}

export default function ThorniaRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thornia-retro-server-poland" />;
}
