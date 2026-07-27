import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realesta-ot-server');
}

export default function OfficialRealestaOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-realesta-ot-server" />;
}
