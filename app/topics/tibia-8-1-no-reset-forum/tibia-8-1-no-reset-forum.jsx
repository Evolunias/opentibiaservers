import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-no-reset-forum');
}

export default function Tibia81NoResetForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-no-reset-forum" />;
}
