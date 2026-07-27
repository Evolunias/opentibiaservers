import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaretro-create-account');
}

export default function BestTibiaretroCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaretro-create-account" />;
}
