import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-6-no-reset-server');
}

export default function Noxiousot86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-6-no-reset-server" />;
}
