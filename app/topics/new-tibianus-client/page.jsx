import NewTibianusClientKeywordPage, { generateMetadata } from './new-tibianus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibianusClientKeywordPage />;
}
