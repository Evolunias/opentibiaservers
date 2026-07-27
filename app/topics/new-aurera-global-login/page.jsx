import NewAureraGlobalLoginKeywordPage, { generateMetadata } from './new-aurera-global-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAureraGlobalLoginKeywordPage />;
}
