import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-screenshots-client');
}

export default function Tibia13WithScreenshotsClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-screenshots-client" />;
}
