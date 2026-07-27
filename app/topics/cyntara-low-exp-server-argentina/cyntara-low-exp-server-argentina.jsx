import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-low-exp-server-argentina');
}

export default function CyntaraLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-low-exp-server-argentina" />;
}
