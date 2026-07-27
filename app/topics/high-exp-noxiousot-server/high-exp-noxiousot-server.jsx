import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-noxiousot-server');
}

export default function HighExpNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-noxiousot-server" />;
}
