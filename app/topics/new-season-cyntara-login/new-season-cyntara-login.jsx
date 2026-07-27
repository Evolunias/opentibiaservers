import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-cyntara-login');
}

export default function NewSeasonCyntaraLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-cyntara-login" />;
}
