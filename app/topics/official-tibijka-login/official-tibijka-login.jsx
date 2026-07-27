import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibijka-login');
}

export default function OfficialTibijkaLoginKeywordPage() {
  return <StaticKeywordPage slug="official-tibijka-login" />;
}
