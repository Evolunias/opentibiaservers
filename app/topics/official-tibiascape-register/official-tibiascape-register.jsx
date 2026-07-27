import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiascape-register');
}

export default function OfficialTibiascapeRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-tibiascape-register" />;
}
