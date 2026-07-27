import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvp-server-europe');
}

export default function DuraOnlinePvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvp-server-europe" />;
}
