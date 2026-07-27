import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaretro-create-account');
}

export default function NewTibiaretroCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaretro-create-account" />;
}
