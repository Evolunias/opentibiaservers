import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-54-no-reset-server');
}

export default function Tibiantis854NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-54-no-reset-server" />;
}
