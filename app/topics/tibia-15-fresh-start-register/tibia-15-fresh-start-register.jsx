import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-fresh-start-register');
}

export default function Tibia15FreshStartRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-fresh-start-register" />;
}
