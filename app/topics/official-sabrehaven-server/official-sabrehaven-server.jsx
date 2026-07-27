import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-sabrehaven-server');
}

export default function OfficialSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="official-sabrehaven-server" />;
}
