import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-germany-servers');
}

export default function CyntaraGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-germany-servers" />;
}
