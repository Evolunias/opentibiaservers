import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-screenshots-server-north-america');
}

export default function ClassicusWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-screenshots-server-north-america" />;
}
