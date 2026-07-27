import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-0-low-exp-server');
}

export default function CalmeraOt100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-0-low-exp-server" />;
}
