import NewKasteriaServerKeywordPage, { generateMetadata } from './new-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewKasteriaServerKeywordPage />;
}
