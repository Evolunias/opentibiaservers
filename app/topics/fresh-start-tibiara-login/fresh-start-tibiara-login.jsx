import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiara-login');
}

export default function FreshStartTibiaraLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiara-login" />;
}
