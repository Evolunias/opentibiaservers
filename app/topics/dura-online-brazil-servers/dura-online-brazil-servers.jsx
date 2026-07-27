import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-brazil-servers');
}

export default function DuraOnlineBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="dura-online-brazil-servers" />;
}
