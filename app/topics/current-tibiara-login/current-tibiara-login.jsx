import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiara-login');
}

export default function CurrentTibiaraLoginKeywordPage() {
  return <StaticKeywordPage slug="current-tibiara-login" />;
}
