import CurrentAureraGlobalKeywordPage, { generateMetadata } from './current-aurera-global';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAureraGlobalKeywordPage />;
}
