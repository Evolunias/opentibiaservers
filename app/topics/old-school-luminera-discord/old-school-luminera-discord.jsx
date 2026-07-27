import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-luminera-discord');
}

export default function OldSchoolLumineraDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-luminera-discord" />;
}
