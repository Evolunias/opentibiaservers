import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oldera-login');
}

export default function NewSeasonOlderaLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-oldera-login" />;
}
