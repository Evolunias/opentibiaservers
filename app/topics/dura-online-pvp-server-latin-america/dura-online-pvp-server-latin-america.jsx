import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvp-server-latin-america');
}

export default function DuraOnlinePvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvp-server-latin-america" />;
}
