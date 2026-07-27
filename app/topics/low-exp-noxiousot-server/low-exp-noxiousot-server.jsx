import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-noxiousot-server');
}

export default function LowExpNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-noxiousot-server" />;
}
