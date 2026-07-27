import CurrentCoxaotOtsKeywordPage, { generateMetadata } from './current-coxaot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCoxaotOtsKeywordPage />;
}
