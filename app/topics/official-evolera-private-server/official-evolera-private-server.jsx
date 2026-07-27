import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolera-private-server');
}

export default function OfficialEvoleraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-evolera-private-server" />;
}
