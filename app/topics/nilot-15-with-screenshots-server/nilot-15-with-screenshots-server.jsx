import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-15-with-screenshots-server');
}

export default function Nilot15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-15-with-screenshots-server" />;
}
