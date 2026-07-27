import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-create-account');
}

export default function TibiaretroCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-create-account" />;
}
