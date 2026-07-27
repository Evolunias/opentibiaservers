import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvpe-server-poland');
}

export default function DuraOnlinePvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvpe-server-poland" />;
}
