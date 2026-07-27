import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ranger-s-arcani-discord');
}

export default function CustomRangerSArcaniDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-ranger-s-arcani-discord" />;
}
