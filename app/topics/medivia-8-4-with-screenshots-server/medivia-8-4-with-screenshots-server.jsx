import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-4-with-screenshots-server');
}

export default function Medivia84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-4-with-screenshots-server" />;
}
