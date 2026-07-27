import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-12-with-screenshots-server');
}

export default function Luminera12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-12-with-screenshots-server" />;
}
