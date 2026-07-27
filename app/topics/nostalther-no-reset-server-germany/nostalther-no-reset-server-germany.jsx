import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-no-reset-server-germany');
}

export default function NostaltherNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nostalther-no-reset-server-germany" />;
}
