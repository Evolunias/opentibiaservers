import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-no-reset-forum');
}

export default function Tibia13NoResetForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-no-reset-forum" />;
}
