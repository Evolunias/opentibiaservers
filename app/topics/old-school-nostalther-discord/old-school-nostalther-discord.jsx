import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nostalther-discord');
}

export default function OldSchoolNostaltherDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-nostalther-discord" />;
}
