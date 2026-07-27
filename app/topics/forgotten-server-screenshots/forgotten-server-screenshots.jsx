import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-screenshots');
}

export default function ForgottenServerScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-screenshots" />;
}
