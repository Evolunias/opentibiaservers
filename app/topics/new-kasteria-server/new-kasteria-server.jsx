import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-kasteria-server');
}

export default function NewKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="new-kasteria-server" />;
}
