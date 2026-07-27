import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-mist-of-death-ot-server');
}

export default function NewMistOfDeathOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-mist-of-death-ot-server" />;
}
