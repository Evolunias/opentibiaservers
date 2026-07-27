import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-screenshots-server-south-america');
}

export default function ClassicusWithScreenshotsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-screenshots-server-south-america" />;
}
