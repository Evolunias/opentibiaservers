import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-screenshots-register');
}

export default function Tibia96WithScreenshotsRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-screenshots-register" />;
}
