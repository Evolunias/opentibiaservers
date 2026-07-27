import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('elera-tibia');
}

export default function EleraTibiaKeywordPage() {
  return <StaticKeywordPage slug="elera-tibia" />;
}
