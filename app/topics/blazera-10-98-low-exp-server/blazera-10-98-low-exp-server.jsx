import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-98-low-exp-server');
}

export default function Blazera1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-98-low-exp-server" />;
}
