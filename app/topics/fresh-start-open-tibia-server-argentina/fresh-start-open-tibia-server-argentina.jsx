import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-open-tibia-server-argentina');
}

export default function FreshStartOpenTibiaServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-open-tibia-server-argentina" />;
}
