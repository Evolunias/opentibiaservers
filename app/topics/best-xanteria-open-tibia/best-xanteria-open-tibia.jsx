import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-xanteria-open-tibia');
}

export default function BestXanteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-xanteria-open-tibia" />;
}
