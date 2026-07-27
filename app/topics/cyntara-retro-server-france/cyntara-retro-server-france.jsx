import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-retro-server-france');
}

export default function CyntaraRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="cyntara-retro-server-france" />;
}
