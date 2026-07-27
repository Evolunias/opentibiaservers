import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaretro-create-account');
}

export default function FreshStartTibiaretroCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaretro-create-account" />;
}
