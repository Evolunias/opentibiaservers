import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-ots');
}

export default function TibiaoriginsOtsKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-ots" />;
}
