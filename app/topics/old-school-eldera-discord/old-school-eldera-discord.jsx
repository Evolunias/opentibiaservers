import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-eldera-discord');
}

export default function OldSchoolElderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-eldera-discord" />;
}
