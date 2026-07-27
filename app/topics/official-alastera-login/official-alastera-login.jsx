import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-alastera-login');
}

export default function OfficialAlasteraLoginKeywordPage() {
  return <StaticKeywordPage slug="official-alastera-login" />;
}
