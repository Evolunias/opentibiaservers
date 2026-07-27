import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-register');
}

export default function TibiaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibiara-register" />;
}
