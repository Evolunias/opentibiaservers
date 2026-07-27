import RangerSArcaniRetroServerUsaKeywordPage, { generateMetadata } from './ranger-s-arcani-retro-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniRetroServerUsaKeywordPage />;
}
