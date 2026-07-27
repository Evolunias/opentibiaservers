import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eldera-register');
}

export default function NewSeasonElderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-eldera-register" />;
}
