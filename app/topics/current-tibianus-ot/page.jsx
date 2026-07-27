import CurrentTibianusOtKeywordPage, { generateMetadata } from './current-tibianus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibianusOtKeywordPage />;
}
