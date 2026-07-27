import NewCoxaotClientKeywordPage, { generateMetadata } from './new-coxaot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCoxaotClientKeywordPage />;
}
