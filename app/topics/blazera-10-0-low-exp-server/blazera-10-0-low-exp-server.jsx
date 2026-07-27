import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-0-low-exp-server');
}

export default function Blazera100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-0-low-exp-server" />;
}
