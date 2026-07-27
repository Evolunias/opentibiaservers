import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-10-0-low-exp-server');
}

export default function Unline100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="unline-10-0-low-exp-server" />;
}
