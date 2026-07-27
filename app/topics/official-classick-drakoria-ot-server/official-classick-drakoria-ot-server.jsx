import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classick-drakoria-ot-server');
}

export default function OfficialClassickDrakoriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-classick-drakoria-ot-server" />;
}
