import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-xanteria-tibia');
}

export default function FreshStartXanteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-xanteria-tibia" />;
}
