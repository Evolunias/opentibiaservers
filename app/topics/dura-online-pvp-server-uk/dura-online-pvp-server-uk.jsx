import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvp-server-uk');
}

export default function DuraOnlinePvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvp-server-uk" />;
}
