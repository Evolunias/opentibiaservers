import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaretro-create-account');
}

export default function CustomTibiaretroCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaretro-create-account" />;
}
