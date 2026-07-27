import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-brazil-server');
}

export default function DuraOnlineBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-brazil-server" />;
}
