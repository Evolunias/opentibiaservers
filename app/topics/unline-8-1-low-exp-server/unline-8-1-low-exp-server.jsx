import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-1-low-exp-server');
}

export default function Unline81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-1-low-exp-server" />;
}
