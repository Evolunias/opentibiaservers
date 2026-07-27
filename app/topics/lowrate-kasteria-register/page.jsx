import LowrateKasteriaRegisterKeywordPage, { generateMetadata } from './lowrate-kasteria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateKasteriaRegisterKeywordPage />;
}
