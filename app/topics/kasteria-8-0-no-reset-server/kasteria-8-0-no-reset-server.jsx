import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-0-no-reset-server');
}

export default function Kasteria80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-0-no-reset-server" />;
}
