import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-imperianic-open-tibia');
}

export default function NewImperianicOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-imperianic-open-tibia" />;
}
