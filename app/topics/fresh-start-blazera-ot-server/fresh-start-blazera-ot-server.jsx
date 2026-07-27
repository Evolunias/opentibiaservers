import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-blazera-ot-server');
}

export default function FreshStartBlazeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-blazera-ot-server" />;
}
