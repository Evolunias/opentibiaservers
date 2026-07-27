import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-server-poland');
}

export default function Tibia1098ServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-server-poland" />;
}
