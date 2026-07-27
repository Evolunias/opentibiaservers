import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-72-with-screenshots-server');
}

export default function Luminera772WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-72-with-screenshots-server" />;
}
