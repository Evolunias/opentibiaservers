import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-demolidores-login');
}

export default function OfficialDemolidoresLoginKeywordPage() {
  return <StaticKeywordPage slug="official-demolidores-login" />;
}
