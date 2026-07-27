import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibianus-login');
}

export default function ActiveTibianusLoginKeywordPage() {
  return <StaticKeywordPage slug="active-tibianus-login" />;
}
