import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-xanteria-open-tibia');
}

export default function TopXanteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-xanteria-open-tibia" />;
}
