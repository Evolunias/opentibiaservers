import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiara-login');
}

export default function BestTibiaraLoginKeywordPage() {
  return <StaticKeywordPage slug="best-tibiara-login" />;
}
