import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiantis-register');
}

export default function HighrateTibiantisRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiantis-register" />;
}
