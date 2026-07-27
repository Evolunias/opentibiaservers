import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaretro-create-account');
}

export default function OfficialTibiaretroCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaretro-create-account" />;
}
