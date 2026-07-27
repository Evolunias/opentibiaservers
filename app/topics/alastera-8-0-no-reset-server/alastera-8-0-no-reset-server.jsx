import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-0-no-reset-server');
}

export default function Alastera80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-0-no-reset-server" />;
}
