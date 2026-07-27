import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oldera-official');
}

export default function ActiveOlderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-oldera-official" />;
}
