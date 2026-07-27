import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-fresh-start-server-north-america');
}

export default function NostaltherFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-fresh-start-server-north-america" />;
}
