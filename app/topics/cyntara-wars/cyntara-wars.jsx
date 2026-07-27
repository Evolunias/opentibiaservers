import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-wars');
}

export default function CyntaraWarsKeywordPage() {
  return <StaticKeywordPage slug="cyntara-wars" />;
}
