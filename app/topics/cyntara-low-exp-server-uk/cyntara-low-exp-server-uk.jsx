import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-low-exp-server-uk');
}

export default function CyntaraLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="cyntara-low-exp-server-uk" />;
}
