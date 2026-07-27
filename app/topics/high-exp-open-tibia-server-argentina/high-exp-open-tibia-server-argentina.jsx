import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-open-tibia-server-argentina');
}

export default function HighExpOpenTibiaServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-open-tibia-server-argentina" />;
}
