import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-imperianic-tibia');
}

export default function NewImperianicTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-imperianic-tibia" />;
}
