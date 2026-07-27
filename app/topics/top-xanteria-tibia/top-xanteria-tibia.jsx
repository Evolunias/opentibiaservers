import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-xanteria-tibia');
}

export default function TopXanteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-xanteria-tibia" />;
}
