import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-login');
}

export default function TibianusLoginKeywordPage() {
  return <StaticKeywordPage slug="tibianus-login" />;
}
