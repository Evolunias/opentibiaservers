import NewCoxaotLoginKeywordPage, { generateMetadata } from './new-coxaot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCoxaotLoginKeywordPage />;
}
