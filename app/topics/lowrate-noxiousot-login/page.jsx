import LowrateNoxiousotLoginKeywordPage, { generateMetadata } from './lowrate-noxiousot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNoxiousotLoginKeywordPage />;
}
