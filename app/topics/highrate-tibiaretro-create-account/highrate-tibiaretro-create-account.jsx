import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaretro-create-account');
}

export default function HighrateTibiaretroCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaretro-create-account" />;
}
