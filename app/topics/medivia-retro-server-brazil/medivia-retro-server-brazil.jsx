import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-retro-server-brazil');
}

export default function MediviaRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="medivia-retro-server-brazil" />;
}
