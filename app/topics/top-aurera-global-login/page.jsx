import TopAureraGlobalLoginKeywordPage, { generateMetadata } from './top-aurera-global-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAureraGlobalLoginKeywordPage />;
}
