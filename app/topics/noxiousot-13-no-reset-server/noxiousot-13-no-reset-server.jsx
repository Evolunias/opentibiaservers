import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-13-no-reset-server');
}

export default function Noxiousot13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-13-no-reset-server" />;
}
