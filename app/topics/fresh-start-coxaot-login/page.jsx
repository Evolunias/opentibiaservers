import FreshStartCoxaotLoginKeywordPage, { generateMetadata } from './fresh-start-coxaot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCoxaotLoginKeywordPage />;
}
