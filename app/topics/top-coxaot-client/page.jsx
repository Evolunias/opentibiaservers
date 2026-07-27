import TopCoxaotClientKeywordPage, { generateMetadata } from './top-coxaot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCoxaotClientKeywordPage />;
}
