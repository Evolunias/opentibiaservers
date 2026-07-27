import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-imperianic-official');
}

export default function FreshStartImperianicOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-imperianic-official" />;
}
