import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-retro-server-argentina');
}

export default function MediviaRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="medivia-retro-server-argentina" />;
}
