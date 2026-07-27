import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-screenshots-server-brazil');
}

export default function TibiaretroWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-screenshots-server-brazil" />;
}
