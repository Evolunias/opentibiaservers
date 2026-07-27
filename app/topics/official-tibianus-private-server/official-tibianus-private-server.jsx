import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibianus-private-server');
}

export default function OfficialTibianusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-tibianus-private-server" />;
}
