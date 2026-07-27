import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-xanteria-tibia');
}

export default function ActiveXanteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-xanteria-tibia" />;
}
