import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-fresh-start-server-poland');
}

export default function CyntaraFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="cyntara-fresh-start-server-poland" />;
}
