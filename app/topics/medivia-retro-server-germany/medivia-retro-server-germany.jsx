import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-retro-server-germany');
}

export default function MediviaRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="medivia-retro-server-germany" />;
}
