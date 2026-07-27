import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thornia-ot');
}

export default function OfficialThorniaOtKeywordPage() {
  return <StaticKeywordPage slug="official-thornia-ot" />;
}
