import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-coxaot-tibia');
}

export default function FreshStartCoxaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-coxaot-tibia" />;
}
