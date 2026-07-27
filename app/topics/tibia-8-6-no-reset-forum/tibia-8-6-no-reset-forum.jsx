import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-no-reset-forum');
}

export default function Tibia86NoResetForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-no-reset-forum" />;
}
