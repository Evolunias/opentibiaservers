import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-1-no-reset-server');
}

export default function Noxiousot71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-1-no-reset-server" />;
}
