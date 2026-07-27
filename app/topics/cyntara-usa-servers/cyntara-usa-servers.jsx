import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-usa-servers');
}

export default function CyntaraUsaServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-usa-servers" />;
}
