import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('secura-tibia');
}

export default function SecuraTibiaKeywordPage() {
  return <StaticKeywordPage slug="secura-tibia" />;
}
