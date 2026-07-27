import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-register-latin-america');
}

export default function RetroRegisterLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-register-latin-america" />;
}
