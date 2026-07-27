import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-screenshots-server-uk');
}

export default function TibianusWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-screenshots-server-uk" />;
}
