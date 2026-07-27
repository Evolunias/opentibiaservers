import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-register-france');
}

export default function RetroRegisterFranceKeywordPage() {
  return <StaticKeywordPage slug="retro-register-france" />;
}
