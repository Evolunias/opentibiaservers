import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ameria-tibia');
}

export default function NoResetAmeriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ameria-tibia" />;
}
