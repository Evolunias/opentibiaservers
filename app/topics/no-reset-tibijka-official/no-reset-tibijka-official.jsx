import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibijka-official');
}

export default function NoResetTibijkaOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibijka-official" />;
}
