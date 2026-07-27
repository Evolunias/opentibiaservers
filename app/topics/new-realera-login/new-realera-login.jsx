import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-realera-login');
}

export default function NewRealeraLoginKeywordPage() {
  return <StaticKeywordPage slug="new-realera-login" />;
}
