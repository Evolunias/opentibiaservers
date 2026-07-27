import NewAureraGlobalKeywordPage, { generateMetadata } from './new-aurera-global';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAureraGlobalKeywordPage />;
}
