import RangerSArcaniRetroServerPolandKeywordPage, { generateMetadata } from './ranger-s-arcani-retro-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniRetroServerPolandKeywordPage />;
}
