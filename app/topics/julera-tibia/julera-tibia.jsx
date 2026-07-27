import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('julera-tibia');
}

export default function JuleraTibiaKeywordPage() {
  return <StaticKeywordPage slug="julera-tibia" />;
}
