import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaretro-create-account');
}

export default function NewSeasonTibiaretroCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaretro-create-account" />;
}
