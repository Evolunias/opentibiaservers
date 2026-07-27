import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibianus-server');
}

export default function OfficialTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="official-tibianus-server" />;
}
