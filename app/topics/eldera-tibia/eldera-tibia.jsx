import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-tibia');
}

export default function ElderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="eldera-tibia" />;
}
