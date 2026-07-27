import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-low-exp-forum');
}

export default function Tibia81LowExpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-low-exp-forum" />;
}
