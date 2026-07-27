import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-imperianic-login');
}

export default function ActiveImperianicLoginKeywordPage() {
  return <StaticKeywordPage slug="active-imperianic-login" />;
}
