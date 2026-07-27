import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp');
}

export default function UnlinePvpKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp" />;
}
