import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-screenshots-server-brazil');
}

export default function SabrehavenWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-screenshots-server-brazil" />;
}
