import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibianus-login');
}

export default function LowrateTibianusLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibianus-login" />;
}
