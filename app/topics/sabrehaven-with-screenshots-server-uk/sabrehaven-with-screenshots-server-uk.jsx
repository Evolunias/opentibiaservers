import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-screenshots-server-uk');
}

export default function SabrehavenWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-screenshots-server-uk" />;
}
