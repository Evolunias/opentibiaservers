import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-coxaot-tibia');
}

export default function NewCoxaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-coxaot-tibia" />;
}
