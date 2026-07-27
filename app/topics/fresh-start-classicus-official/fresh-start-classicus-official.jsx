import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classicus-official');
}

export default function FreshStartClassicusOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classicus-official" />;
}
