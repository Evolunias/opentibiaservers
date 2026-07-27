import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibianus-login');
}

export default function CustomTibianusLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-tibianus-login" />;
}
