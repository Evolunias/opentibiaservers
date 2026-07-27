import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eldera-tibia');
}

export default function NoResetElderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eldera-tibia" />;
}
