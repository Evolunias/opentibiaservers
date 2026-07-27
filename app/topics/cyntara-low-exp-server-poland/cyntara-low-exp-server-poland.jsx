import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-low-exp-server-poland');
}

export default function CyntaraLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="cyntara-low-exp-server-poland" />;
}
