import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiame-register');
}

export default function HighrateTibiameRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiame-register" />;
}
