import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-blazera-official');
}

export default function FreshStartBlazeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-blazera-official" />;
}
