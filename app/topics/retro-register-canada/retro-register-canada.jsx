import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-register-canada');
}

export default function RetroRegisterCanadaKeywordPage() {
  return <StaticKeywordPage slug="retro-register-canada" />;
}
