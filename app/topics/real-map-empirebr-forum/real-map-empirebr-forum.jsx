import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-empirebr-forum');
}

export default function RealMapEmpirebrForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-empirebr-forum" />;
}
