import NewTibianusOtKeywordPage, { generateMetadata } from './new-tibianus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibianusOtKeywordPage />;
}
