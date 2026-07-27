import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-15-no-reset-server');
}

export default function Noxiousot15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-15-no-reset-server" />;
}
