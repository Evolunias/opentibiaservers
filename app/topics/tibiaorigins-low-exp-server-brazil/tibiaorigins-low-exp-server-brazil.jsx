import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-low-exp-server-brazil');
}

export default function TibiaoriginsLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-low-exp-server-brazil" />;
}
