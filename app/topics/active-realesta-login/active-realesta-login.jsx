import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realesta-login');
}

export default function ActiveRealestaLoginKeywordPage() {
  return <StaticKeywordPage slug="active-realesta-login" />;
}
