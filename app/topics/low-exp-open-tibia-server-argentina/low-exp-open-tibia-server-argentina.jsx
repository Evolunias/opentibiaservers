import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-open-tibia-server-argentina');
}

export default function LowExpOpenTibiaServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-open-tibia-server-argentina" />;
}
