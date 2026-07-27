import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-no-reset-server-argentina');
}

export default function TibijkaNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-no-reset-server-argentina" />;
}
