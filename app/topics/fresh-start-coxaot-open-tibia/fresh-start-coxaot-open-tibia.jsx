import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-coxaot-open-tibia');
}

export default function FreshStartCoxaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-coxaot-open-tibia" />;
}
