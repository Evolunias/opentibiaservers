import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realesta-official');
}

export default function FreshStartRealestaOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realesta-official" />;
}
