import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-12-with-screenshots-server');
}

export default function DuraOnline12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-12-with-screenshots-server" />;
}
