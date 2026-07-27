import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-official');
}

export default function OxygenotOfficialKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-official" />;
}
