import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-alastera-discord');
}

export default function OldSchoolAlasteraDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-alastera-discord" />;
}
