import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oldera-official');
}

export default function NewOlderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-oldera-official" />;
}
