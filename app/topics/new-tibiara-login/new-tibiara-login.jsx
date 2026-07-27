import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiara-login');
}

export default function NewTibiaraLoginKeywordPage() {
  return <StaticKeywordPage slug="new-tibiara-login" />;
}
