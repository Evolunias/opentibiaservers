import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-alastera');
}

export default function OfficialAlasteraKeywordPage() {
  return <StaticKeywordPage slug="official-alastera" />;
}
