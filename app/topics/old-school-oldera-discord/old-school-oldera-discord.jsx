import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oldera-discord');
}

export default function OldSchoolOlderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-oldera-discord" />;
}
