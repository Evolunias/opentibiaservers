import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-fresh-start-register');
}

export default function Tibia14FreshStartRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-fresh-start-register" />;
}
