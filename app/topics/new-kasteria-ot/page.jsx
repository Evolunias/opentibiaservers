import NewKasteriaOtKeywordPage, { generateMetadata } from './new-kasteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewKasteriaOtKeywordPage />;
}
