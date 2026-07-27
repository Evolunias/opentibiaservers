import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-unline-ot-server');
}

export default function OfficialUnlineOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-unline-ot-server" />;
}
