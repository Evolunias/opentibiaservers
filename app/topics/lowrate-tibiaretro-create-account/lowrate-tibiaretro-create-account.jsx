import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaretro-create-account');
}

export default function LowrateTibiaretroCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaretro-create-account" />;
}
