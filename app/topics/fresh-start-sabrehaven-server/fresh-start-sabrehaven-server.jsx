import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-sabrehaven-server');
}

export default function FreshStartSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-sabrehaven-server" />;
}
