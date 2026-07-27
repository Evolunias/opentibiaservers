import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realera-official');
}

export default function FreshStartRealeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realera-official" />;
}
