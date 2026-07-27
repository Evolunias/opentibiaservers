import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eldera-tibia');
}

export default function FreshStartElderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eldera-tibia" />;
}
