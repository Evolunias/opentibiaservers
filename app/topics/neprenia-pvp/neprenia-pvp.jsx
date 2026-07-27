import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp');
}

export default function NepreniaPvpKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp" />;
}
