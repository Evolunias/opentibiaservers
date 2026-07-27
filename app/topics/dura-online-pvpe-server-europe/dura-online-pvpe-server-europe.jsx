import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvpe-server-europe');
}

export default function DuraOnlinePvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvpe-server-europe" />;
}
