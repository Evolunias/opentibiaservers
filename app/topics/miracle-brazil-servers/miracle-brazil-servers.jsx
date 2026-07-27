import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-brazil-servers');
}

export default function MiracleBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="miracle-brazil-servers" />;
}
