import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-open-tibia-server-south-america');
}

export default function FreshStartOpenTibiaServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-open-tibia-server-south-america" />;
}
