import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-high-exp-server-south-america');
}

export default function ThorniaHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-high-exp-server-south-america" />;
}
