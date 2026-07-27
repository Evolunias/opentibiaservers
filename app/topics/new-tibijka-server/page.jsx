import NewTibijkaServerKeywordPage, { generateMetadata } from './new-tibijka-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibijkaServerKeywordPage />;
}
