import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-screenshots');
}

export default function FunServerScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="fun-server-screenshots" />;
}
