import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiascape-tibia');
}

export default function OfficialTibiascapeTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-tibiascape-tibia" />;
}
