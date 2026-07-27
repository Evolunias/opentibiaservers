import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaretro-create-account');
}

export default function CurrentTibiaretroCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaretro-create-account" />;
}
