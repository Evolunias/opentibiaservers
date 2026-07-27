import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-fresh-start-register');
}

export default function Tibia11FreshStartRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-fresh-start-register" />;
}
