import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realesta-login');
}

export default function OfficialRealestaLoginKeywordPage() {
  return <StaticKeywordPage slug="official-realesta-login" />;
}
