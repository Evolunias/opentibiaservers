import TopCoxaotLoginKeywordPage, { generateMetadata } from './top-coxaot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCoxaotLoginKeywordPage />;
}
