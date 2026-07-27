import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-11-with-screenshots-server');
}

export default function Nilot11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-11-with-screenshots-server" />;
}
