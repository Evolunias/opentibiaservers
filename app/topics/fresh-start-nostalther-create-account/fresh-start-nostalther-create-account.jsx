import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nostalther-create-account');
}

export default function FreshStartNostaltherCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nostalther-create-account" />;
}
