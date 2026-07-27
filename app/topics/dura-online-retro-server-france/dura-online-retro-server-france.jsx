import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-retro-server-france');
}

export default function DuraOnlineRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dura-online-retro-server-france" />;
}
