import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-blazera-tibia');
}

export default function NoResetBlazeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-blazera-tibia" />;
}
