import HighrateNoxiousotServerKeywordPage, { generateMetadata } from './highrate-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNoxiousotServerKeywordPage />;
}
