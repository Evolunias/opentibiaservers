import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oldera-official');
}

export default function FreshStartOlderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oldera-official" />;
}
