import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-high-exp');
}

export default function InfernalOtHighExpKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-high-exp" />;
}
