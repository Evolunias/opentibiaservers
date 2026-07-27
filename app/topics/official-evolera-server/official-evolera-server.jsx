import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolera-server');
}

export default function OfficialEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="official-evolera-server" />;
}
