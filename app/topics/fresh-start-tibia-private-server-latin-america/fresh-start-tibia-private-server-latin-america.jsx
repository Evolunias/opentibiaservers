import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibia-private-server-latin-america');
}

export default function FreshStartTibiaPrivateServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibia-private-server-latin-america" />;
}
