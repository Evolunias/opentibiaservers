import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-luminera-tibia');
}

export default function NoResetLumineraTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-luminera-tibia" />;
}
