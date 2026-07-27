import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-alastera-server');
}

export default function OfficialAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="official-alastera-server" />;
}
