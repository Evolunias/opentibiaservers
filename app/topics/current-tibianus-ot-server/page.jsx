import CurrentTibianusOtServerKeywordPage, { generateMetadata } from './current-tibianus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibianusOtServerKeywordPage />;
}
