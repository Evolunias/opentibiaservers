import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiara-login');
}

export default function LowrateTibiaraLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiara-login" />;
}
