import LowExpSeasonUsaKeywordPage, { generateMetadata } from './low-exp-season-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpSeasonUsaKeywordPage />;
}
