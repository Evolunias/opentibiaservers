import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-retro-server-europe');
}

export default function ThorniaRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thornia-retro-server-europe" />;
}
