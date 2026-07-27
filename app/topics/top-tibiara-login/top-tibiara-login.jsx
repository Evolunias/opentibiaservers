import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiara-login');
}

export default function TopTibiaraLoginKeywordPage() {
  return <StaticKeywordPage slug="top-tibiara-login" />;
}
