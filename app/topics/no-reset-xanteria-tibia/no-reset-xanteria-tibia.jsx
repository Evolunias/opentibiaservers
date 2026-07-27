import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-xanteria-tibia');
}

export default function NoResetXanteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-xanteria-tibia" />;
}
