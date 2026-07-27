import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-no-reset-forum');
}

export default function Tibia96NoResetForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-no-reset-forum" />;
}
