import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classicus-tibia');
}

export default function NoResetClassicusTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classicus-tibia" />;
}
