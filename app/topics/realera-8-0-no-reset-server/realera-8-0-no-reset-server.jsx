import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-0-no-reset-server');
}

export default function Realera80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-0-no-reset-server" />;
}
