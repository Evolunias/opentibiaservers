import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thornia-official');
}

export default function FreshStartThorniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thornia-official" />;
}
