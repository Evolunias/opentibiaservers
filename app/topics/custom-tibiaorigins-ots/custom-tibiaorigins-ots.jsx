import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaorigins-ots');
}

export default function CustomTibiaoriginsOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaorigins-ots" />;
}
