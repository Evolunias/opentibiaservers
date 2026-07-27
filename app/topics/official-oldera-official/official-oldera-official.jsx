import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oldera-official');
}

export default function OfficialOlderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-oldera-official" />;
}
