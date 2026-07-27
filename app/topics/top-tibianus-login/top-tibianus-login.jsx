import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibianus-login');
}

export default function TopTibianusLoginKeywordPage() {
  return <StaticKeywordPage slug="top-tibianus-login" />;
}
