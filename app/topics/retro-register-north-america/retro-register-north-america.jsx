import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-register-north-america');
}

export default function RetroRegisterNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-register-north-america" />;
}
