import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiascape-tibia');
}

export default function CustomTibiascapeTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiascape-tibia" />;
}
