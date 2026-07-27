import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibijka-ot-server');
}

export default function OfficialTibijkaOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-tibijka-ot-server" />;
}
