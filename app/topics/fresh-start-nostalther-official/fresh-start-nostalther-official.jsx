import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nostalther-official');
}

export default function FreshStartNostaltherOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nostalther-official" />;
}
