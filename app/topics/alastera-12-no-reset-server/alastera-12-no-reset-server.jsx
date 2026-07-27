import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-12-no-reset-server');
}

export default function Alastera12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-12-no-reset-server" />;
}
