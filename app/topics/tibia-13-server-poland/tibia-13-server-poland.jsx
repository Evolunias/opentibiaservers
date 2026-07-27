import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-server-poland');
}

export default function Tibia13ServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-server-poland" />;
}
