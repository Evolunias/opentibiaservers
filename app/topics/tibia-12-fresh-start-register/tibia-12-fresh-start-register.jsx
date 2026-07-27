import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-fresh-start-register');
}

export default function Tibia12FreshStartRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-fresh-start-register" />;
}
