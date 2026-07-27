import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-coxaot-open-tibia');
}

export default function NewCoxaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-coxaot-open-tibia" />;
}
