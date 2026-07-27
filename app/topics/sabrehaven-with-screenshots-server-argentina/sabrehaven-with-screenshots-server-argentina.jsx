import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-screenshots-server-argentina');
}

export default function SabrehavenWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-screenshots-server-argentina" />;
}
