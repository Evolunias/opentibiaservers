import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realesta-ots');
}

export default function ActiveRealestaOtsKeywordPage() {
  return <StaticKeywordPage slug="active-realesta-ots" />;
}
