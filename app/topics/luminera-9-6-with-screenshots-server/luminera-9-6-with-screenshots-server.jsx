import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-9-6-with-screenshots-server');
}

export default function Luminera96WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-9-6-with-screenshots-server" />;
}
