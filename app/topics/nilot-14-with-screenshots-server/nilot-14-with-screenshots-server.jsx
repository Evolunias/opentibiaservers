import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-14-with-screenshots-server');
}

export default function Nilot14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-14-with-screenshots-server" />;
}
