import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-alastera-private-server');
}

export default function OfficialAlasteraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-alastera-private-server" />;
}
