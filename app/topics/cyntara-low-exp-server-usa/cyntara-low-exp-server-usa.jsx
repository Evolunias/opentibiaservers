import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-low-exp-server-usa');
}

export default function CyntaraLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-low-exp-server-usa" />;
}
