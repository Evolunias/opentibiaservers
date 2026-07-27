import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-0-with-screenshots-server');
}

export default function Luminera80WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-0-with-screenshots-server" />;
}
