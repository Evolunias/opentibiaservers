import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibianus-official');
}

export default function FreshStartTibianusOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibianus-official" />;
}
