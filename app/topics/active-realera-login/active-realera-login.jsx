import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realera-login');
}

export default function ActiveRealeraLoginKeywordPage() {
  return <StaticKeywordPage slug="active-realera-login" />;
}
