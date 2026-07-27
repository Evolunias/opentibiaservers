import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiara-login');
}

export default function PopularTibiaraLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiara-login" />;
}
