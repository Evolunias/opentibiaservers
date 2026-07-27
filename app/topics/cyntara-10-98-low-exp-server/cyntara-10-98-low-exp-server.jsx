import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-98-low-exp-server');
}

export default function Cyntara1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-98-low-exp-server" />;
}
