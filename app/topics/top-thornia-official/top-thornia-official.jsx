import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thornia-official');
}

export default function TopThorniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-thornia-official" />;
}
