import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-0-with-screenshots-server');
}

export default function Medivia80WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-0-with-screenshots-server" />;
}
