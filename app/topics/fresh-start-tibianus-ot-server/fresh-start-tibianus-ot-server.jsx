import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibianus-ot-server');
}

export default function FreshStartTibianusOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibianus-ot-server" />;
}
