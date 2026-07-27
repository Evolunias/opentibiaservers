import NewCoxaotOtsKeywordPage, { generateMetadata } from './new-coxaot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCoxaotOtsKeywordPage />;
}
