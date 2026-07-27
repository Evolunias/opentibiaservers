import LowExpNoxiousotServerKeywordPage, { generateMetadata } from './low-exp-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpNoxiousotServerKeywordPage />;
}
