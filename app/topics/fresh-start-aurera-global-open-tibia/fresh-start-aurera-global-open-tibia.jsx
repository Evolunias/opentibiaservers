import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-aurera-global-open-tibia');
}

export default function FreshStartAureraGlobalOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-aurera-global-open-tibia" />;
}
