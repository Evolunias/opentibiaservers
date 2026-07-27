import LowrateAureraGlobalServerKeywordPage, { generateMetadata } from './lowrate-aurera-global-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAureraGlobalServerKeywordPage />;
}
