import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('guardia-tibia');
}

export default function GuardiaTibiaKeywordPage() {
  return <StaticKeywordPage slug="guardia-tibia" />;
}
