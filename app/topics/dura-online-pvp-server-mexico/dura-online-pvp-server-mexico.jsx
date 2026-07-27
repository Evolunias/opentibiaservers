import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvp-server-mexico');
}

export default function DuraOnlinePvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvp-server-mexico" />;
}
