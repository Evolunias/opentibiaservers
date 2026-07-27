import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-no-reset-forum');
}

export default function Tibia11NoResetForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-no-reset-forum" />;
}
