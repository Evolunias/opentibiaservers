import CurrentAureraGlobalOtKeywordPage, { generateMetadata } from './current-aurera-global-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAureraGlobalOtKeywordPage />;
}
