import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvp');
}

export default function DuraOnlinePvpKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvp" />;
}
