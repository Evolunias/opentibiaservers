import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-low-exp-forum');
}

export default function Tibia100LowExpForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-low-exp-forum" />;
}
