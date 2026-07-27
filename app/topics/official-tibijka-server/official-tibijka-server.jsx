import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibijka-server');
}

export default function OfficialTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="official-tibijka-server" />;
}
