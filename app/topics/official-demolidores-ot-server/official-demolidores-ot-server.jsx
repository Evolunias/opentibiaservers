import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-demolidores-ot-server');
}

export default function OfficialDemolidoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-demolidores-ot-server" />;
}
