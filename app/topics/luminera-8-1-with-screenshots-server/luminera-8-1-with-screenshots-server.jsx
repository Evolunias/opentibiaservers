import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-1-with-screenshots-server');
}

export default function Luminera81WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-1-with-screenshots-server" />;
}
