import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-xanteria-tibia');
}

export default function NewXanteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-xanteria-tibia" />;
}
