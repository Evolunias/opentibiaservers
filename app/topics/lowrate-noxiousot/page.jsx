import LowrateNoxiousotKeywordPage, { generateMetadata } from './lowrate-noxiousot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNoxiousotKeywordPage />;
}
