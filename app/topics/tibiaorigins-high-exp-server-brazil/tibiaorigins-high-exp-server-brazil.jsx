import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-high-exp-server-brazil');
}

export default function TibiaoriginsHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-high-exp-server-brazil" />;
}
