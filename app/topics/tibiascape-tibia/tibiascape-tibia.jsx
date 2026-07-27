import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-tibia');
}

export default function TibiascapeTibiaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-tibia" />;
}
