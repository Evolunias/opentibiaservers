import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-low-exp-forum');
}

export default function Tibia74LowExpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-low-exp-forum" />;
}
