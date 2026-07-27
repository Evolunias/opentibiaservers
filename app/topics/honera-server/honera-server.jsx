import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('honera-server');
}

export default function HoneraServerKeywordPage() {
  return <StaticKeywordPage slug="honera-server" />;
}
