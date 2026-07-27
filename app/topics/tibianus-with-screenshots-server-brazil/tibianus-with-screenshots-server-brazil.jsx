import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-screenshots-server-brazil');
}

export default function TibianusWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-screenshots-server-brazil" />;
}
