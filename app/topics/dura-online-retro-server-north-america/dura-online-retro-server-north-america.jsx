import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-retro-server-north-america');
}

export default function DuraOnlineRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-retro-server-north-america" />;
}
