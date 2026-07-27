import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ameria-discord');
}

export default function OldSchoolAmeriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-ameria-discord" />;
}
