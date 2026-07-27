import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-uk-servers');
}

export default function CyntaraUkServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-uk-servers" />;
}
