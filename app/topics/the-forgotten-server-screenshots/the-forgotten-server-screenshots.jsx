import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server-screenshots');
}

export default function TheForgottenServerScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server-screenshots" />;
}
