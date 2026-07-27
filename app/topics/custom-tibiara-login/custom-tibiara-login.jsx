import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiara-login');
}

export default function CustomTibiaraLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiara-login" />;
}
