import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-0-low-exp-server');
}

export default function Alastera100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-0-low-exp-server" />;
}
