import CurrentAureraGlobalClientKeywordPage, { generateMetadata } from './current-aurera-global-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAureraGlobalClientKeywordPage />;
}
