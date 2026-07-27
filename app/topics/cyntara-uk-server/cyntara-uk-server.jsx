import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-uk-server');
}

export default function CyntaraUkServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-uk-server" />;
}
