import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-13-with-screenshots-server');
}

export default function Luminera13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-13-with-screenshots-server" />;
}
