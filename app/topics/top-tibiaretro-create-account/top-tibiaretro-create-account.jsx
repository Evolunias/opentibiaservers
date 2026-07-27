import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaretro-create-account');
}

export default function TopTibiaretroCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaretro-create-account" />;
}
