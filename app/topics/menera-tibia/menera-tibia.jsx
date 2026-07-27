import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('menera-tibia');
}

export default function MeneraTibiaKeywordPage() {
  return <StaticKeywordPage slug="menera-tibia" />;
}
