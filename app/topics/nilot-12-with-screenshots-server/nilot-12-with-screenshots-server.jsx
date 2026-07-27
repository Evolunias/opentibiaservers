import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-12-with-screenshots-server');
}

export default function Nilot12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-12-with-screenshots-server" />;
}
