import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-brazil-server');
}

export default function MiracleBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-brazil-server" />;
}
