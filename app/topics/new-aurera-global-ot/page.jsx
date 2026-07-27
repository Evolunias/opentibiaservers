import NewAureraGlobalOtKeywordPage, { generateMetadata } from './new-aurera-global-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAureraGlobalOtKeywordPage />;
}
