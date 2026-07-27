import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-xanteria-open-tibia');
}

export default function FreshStartXanteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-xanteria-open-tibia" />;
}
