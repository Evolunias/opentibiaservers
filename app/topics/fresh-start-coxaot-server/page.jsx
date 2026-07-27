import FreshStartCoxaotServerKeywordPage, { generateMetadata } from './fresh-start-coxaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCoxaotServerKeywordPage />;
}
