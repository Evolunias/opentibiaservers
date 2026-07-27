import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-screenshots-client');
}

export default function Tibia84WithScreenshotsClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-screenshots-client" />;
}
