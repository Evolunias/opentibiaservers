import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-6-with-screenshots-server');
}

export default function Luminera86WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-6-with-screenshots-server" />;
}
