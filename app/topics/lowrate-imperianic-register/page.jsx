import LowrateImperianicRegisterKeywordPage, { generateMetadata } from './lowrate-imperianic-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateImperianicRegisterKeywordPage />;
}
