import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-register-mexico');
}

export default function RetroRegisterMexicoKeywordPage() {
  return <StaticKeywordPage slug="retro-register-mexico" />;
}
