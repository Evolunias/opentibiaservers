import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-low-exp-forum');
}

export default function Tibia1098LowExpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-low-exp-forum" />;
}
