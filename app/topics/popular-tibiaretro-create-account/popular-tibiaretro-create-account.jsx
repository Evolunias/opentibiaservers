import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaretro-create-account');
}

export default function PopularTibiaretroCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaretro-create-account" />;
}
