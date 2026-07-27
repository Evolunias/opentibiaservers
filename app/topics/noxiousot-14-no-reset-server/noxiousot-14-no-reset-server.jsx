import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-14-no-reset-server');
}

export default function Noxiousot14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-14-no-reset-server" />;
}
