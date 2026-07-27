import HighrateNoxiousotKeywordPage, { generateMetadata } from './highrate-noxiousot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNoxiousotKeywordPage />;
}
