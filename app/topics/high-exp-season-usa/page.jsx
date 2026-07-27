import HighExpSeasonUsaKeywordPage, { generateMetadata } from './high-exp-season-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpSeasonUsaKeywordPage />;
}
