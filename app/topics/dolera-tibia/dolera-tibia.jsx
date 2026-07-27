import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dolera-tibia');
}

export default function DoleraTibiaKeywordPage() {
  return <StaticKeywordPage slug="dolera-tibia" />;
}
