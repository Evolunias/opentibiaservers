import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiara-login');
}

export default function ActiveTibiaraLoginKeywordPage() {
  return <StaticKeywordPage slug="active-tibiara-login" />;
}
