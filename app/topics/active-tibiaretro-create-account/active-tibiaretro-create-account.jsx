import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaretro-create-account');
}

export default function ActiveTibiaretroCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaretro-create-account" />;
}
