import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('guardia-tibia-world');
}

export default function GuardiaTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="guardia-tibia-world" />;
}
