import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('refugia-open-pvp');
}

export default function RefugiaOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="refugia-open-pvp" />;
}
