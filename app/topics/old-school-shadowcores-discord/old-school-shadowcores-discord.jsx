import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-shadowcores-discord');
}

export default function OldSchoolShadowcoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-shadowcores-discord" />;
}
