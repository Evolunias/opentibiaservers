import NewKasteriaOtServerKeywordPage, { generateMetadata } from './new-kasteria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewKasteriaOtServerKeywordPage />;
}
