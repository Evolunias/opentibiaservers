import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nostalther-client');
}

export default function NoResetNostaltherClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nostalther-client" />;
}
