import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-12-with-screenshots-server');
}

export default function Unline12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="unline-12-with-screenshots-server" />;
}
