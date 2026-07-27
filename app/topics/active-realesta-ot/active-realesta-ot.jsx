import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realesta-ot');
}

export default function ActiveRealestaOtKeywordPage() {
  return <StaticKeywordPage slug="active-realesta-ot" />;
}
