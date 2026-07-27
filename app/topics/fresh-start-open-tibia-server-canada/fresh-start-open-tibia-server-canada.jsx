import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-open-tibia-server-canada');
}

export default function FreshStartOpenTibiaServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-open-tibia-server-canada" />;
}
