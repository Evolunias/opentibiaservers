import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classick-drakoria-tibia');
}

export default function NoResetClassickDrakoriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classick-drakoria-tibia" />;
}
