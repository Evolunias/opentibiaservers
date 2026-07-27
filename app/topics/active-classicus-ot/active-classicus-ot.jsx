import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classicus-ot');
}

export default function ActiveClassicusOtKeywordPage() {
  return <StaticKeywordPage slug="active-classicus-ot" />;
}
