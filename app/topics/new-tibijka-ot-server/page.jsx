import NewTibijkaOtServerKeywordPage, { generateMetadata } from './new-tibijka-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibijkaOtServerKeywordPage />;
}
