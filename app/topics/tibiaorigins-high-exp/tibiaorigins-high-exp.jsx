import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-high-exp');
}

export default function TibiaoriginsHighExpKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-high-exp" />;
}
