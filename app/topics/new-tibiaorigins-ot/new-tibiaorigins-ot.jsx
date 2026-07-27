import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaorigins-ot');
}

export default function NewTibiaoriginsOtKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaorigins-ot" />;
}
