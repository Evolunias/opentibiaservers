import TopCoxaotServerKeywordPage, { generateMetadata } from './top-coxaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCoxaotServerKeywordPage />;
}
