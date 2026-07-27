import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-low-exp-server-europe');
}

export default function CyntaraLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="cyntara-low-exp-server-europe" />;
}
