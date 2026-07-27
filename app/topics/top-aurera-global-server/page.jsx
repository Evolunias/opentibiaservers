import TopAureraGlobalServerKeywordPage, { generateMetadata } from './top-aurera-global-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAureraGlobalServerKeywordPage />;
}
