import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trimera-tibia');
}

export default function TrimeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="trimera-tibia" />;
}
