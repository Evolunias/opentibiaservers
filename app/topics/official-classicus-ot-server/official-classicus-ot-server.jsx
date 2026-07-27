import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classicus-ot-server');
}

export default function OfficialClassicusOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-classicus-ot-server" />;
}
