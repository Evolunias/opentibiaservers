import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-xanteria-tibia');
}

export default function BestXanteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-xanteria-tibia" />;
}
