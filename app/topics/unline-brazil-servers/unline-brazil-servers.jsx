import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-brazil-servers');
}

export default function UnlineBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="unline-brazil-servers" />;
}
