import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-no-reset-server-argentina');
}

export default function NostaltherNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-no-reset-server-argentina" />;
}
