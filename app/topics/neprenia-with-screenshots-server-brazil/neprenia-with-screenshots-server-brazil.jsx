import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-screenshots-server-brazil');
}

export default function NepreniaWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-screenshots-server-brazil" />;
}
