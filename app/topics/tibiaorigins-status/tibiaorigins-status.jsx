import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-status');
}

export default function TibiaoriginsStatusKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-status" />;
}
