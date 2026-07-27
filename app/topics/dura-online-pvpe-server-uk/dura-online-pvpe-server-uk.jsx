import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvpe-server-uk');
}

export default function DuraOnlinePvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvpe-server-uk" />;
}
