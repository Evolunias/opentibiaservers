import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibianus-register');
}

export default function HighrateTibianusRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibianus-register" />;
}
