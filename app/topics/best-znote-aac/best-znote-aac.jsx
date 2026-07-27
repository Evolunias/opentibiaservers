import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-znote-aac');
}

export default function BestZnoteAacKeywordPage() {
  return <StaticKeywordPage slug="best-znote-aac" />;
}
