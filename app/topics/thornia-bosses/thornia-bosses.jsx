import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-bosses');
}

export default function ThorniaBossesKeywordPage() {
  return <StaticKeywordPage slug="thornia-bosses" />;
}
