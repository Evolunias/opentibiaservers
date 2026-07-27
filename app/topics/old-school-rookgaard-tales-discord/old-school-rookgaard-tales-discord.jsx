import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rookgaard-tales-discord');
}

export default function OldSchoolRookgaardTalesDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-rookgaard-tales-discord" />;
}
