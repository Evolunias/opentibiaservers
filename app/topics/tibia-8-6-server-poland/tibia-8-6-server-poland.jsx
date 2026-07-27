import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-server-poland');
}

export default function Tibia86ServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-server-poland" />;
}
