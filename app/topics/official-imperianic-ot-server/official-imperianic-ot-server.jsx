import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-imperianic-ot-server');
}

export default function OfficialImperianicOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-imperianic-ot-server" />;
}
