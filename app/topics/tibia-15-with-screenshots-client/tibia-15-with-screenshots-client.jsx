import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-screenshots-client');
}

export default function Tibia15WithScreenshotsClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-screenshots-client" />;
}
