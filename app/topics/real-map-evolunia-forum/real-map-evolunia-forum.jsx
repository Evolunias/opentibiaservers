import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolunia-forum');
}

export default function RealMapEvoluniaForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolunia-forum" />;
}
