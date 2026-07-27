import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-screenshots-register');
}

export default function Tibia12WithScreenshotsRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-screenshots-register" />;
}
