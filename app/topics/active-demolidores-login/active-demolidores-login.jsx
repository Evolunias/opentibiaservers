import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-demolidores-login');
}

export default function ActiveDemolidoresLoginKeywordPage() {
  return <StaticKeywordPage slug="active-demolidores-login" />;
}
