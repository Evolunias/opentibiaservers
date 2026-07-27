import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiascape-official');
}

export default function FreshStartTibiascapeOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiascape-official" />;
}
