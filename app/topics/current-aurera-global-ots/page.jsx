import CurrentAureraGlobalOtsKeywordPage, { generateMetadata } from './current-aurera-global-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAureraGlobalOtsKeywordPage />;
}
