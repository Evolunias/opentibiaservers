import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-xanteria-open-tibia');
}

export default function ActiveXanteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-xanteria-open-tibia" />;
}
