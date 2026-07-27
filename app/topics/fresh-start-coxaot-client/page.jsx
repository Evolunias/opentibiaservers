import FreshStartCoxaotClientKeywordPage, { generateMetadata } from './fresh-start-coxaot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCoxaotClientKeywordPage />;
}
