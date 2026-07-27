import CurrentNoxiousotOtServerKeywordPage, { generateMetadata } from './current-noxiousot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNoxiousotOtServerKeywordPage />;
}
