import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-login');
}

export default function TibiaraLoginKeywordPage() {
  return <StaticKeywordPage slug="tibiara-login" />;
}
