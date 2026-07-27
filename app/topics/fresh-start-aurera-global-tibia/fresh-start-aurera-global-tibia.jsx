import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-aurera-global-tibia');
}

export default function FreshStartAureraGlobalTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-aurera-global-tibia" />;
}
