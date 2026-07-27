import LowrateAureraGlobalKeywordPage, { generateMetadata } from './lowrate-aurera-global';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAureraGlobalKeywordPage />;
}
