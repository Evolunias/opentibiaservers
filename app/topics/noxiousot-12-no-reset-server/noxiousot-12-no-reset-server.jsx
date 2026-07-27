import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-12-no-reset-server');
}

export default function Noxiousot12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-12-no-reset-server" />;
}
