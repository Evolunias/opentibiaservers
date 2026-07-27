import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibianus-ot');
}

export default function NewTibianusOtKeywordPage() {
  return <StaticKeywordPage slug="new-tibianus-ot" />;
}
