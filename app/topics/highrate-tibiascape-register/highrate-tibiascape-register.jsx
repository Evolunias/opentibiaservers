import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiascape-register');
}

export default function HighrateTibiascapeRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiascape-register" />;
}
