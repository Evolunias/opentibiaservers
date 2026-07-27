import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-non-pvp');
}

export default function OpenTibiaServersNonPvpKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-non-pvp" />;
}
