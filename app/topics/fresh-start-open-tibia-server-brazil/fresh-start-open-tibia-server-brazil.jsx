import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-open-tibia-server-brazil');
}

export default function FreshStartOpenTibiaServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-open-tibia-server-brazil" />;
}
