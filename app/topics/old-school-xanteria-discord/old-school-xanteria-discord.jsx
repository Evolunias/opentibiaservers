import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-xanteria-discord');
}

export default function OldSchoolXanteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-xanteria-discord" />;
}
