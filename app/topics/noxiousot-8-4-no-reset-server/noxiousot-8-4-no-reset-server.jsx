import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-4-no-reset-server');
}

export default function Noxiousot84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-4-no-reset-server" />;
}
