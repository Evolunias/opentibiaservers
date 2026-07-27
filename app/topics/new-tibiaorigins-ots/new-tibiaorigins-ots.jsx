import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaorigins-ots');
}

export default function NewTibiaoriginsOtsKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaorigins-ots" />;
}
