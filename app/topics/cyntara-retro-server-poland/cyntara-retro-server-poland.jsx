import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-retro-server-poland');
}

export default function CyntaraRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="cyntara-retro-server-poland" />;
}
