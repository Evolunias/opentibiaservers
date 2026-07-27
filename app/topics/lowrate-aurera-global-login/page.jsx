import LowrateAureraGlobalLoginKeywordPage, { generateMetadata } from './lowrate-aurera-global-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAureraGlobalLoginKeywordPage />;
}
