import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-server-mexico');
}

export default function UnlinePvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-server-mexico" />;
}
