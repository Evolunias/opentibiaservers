import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-archlight');
}

export default function OfficialArchlightKeywordPage() {
  return <StaticKeywordPage slug="official-archlight" />;
}
