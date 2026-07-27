import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-pvp');
}

export default function OpenTibiaServersPvpKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-pvp" />;
}
