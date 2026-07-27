import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiascape-tibia');
}

export default function ActiveTibiascapeTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-tibiascape-tibia" />;
}
