import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-retro-server-latin-america');
}

export default function DuraOnlineRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-retro-server-latin-america" />;
}
