import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-4-with-screenshots-server');
}

export default function Luminera74WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-4-with-screenshots-server" />;
}
