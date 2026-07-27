import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-xanteria-open-tibia');
}

export default function NewXanteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-xanteria-open-tibia" />;
}
