import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-with-screenshots-register');
}

export default function Tibia772WithScreenshotsRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-with-screenshots-register" />;
}
