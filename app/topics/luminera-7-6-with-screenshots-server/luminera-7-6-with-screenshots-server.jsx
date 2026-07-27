import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-6-with-screenshots-server');
}

export default function Luminera76WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-6-with-screenshots-server" />;
}
