import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-screenshots-server-poland');
}

export default function SabrehavenWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-screenshots-server-poland" />;
}
