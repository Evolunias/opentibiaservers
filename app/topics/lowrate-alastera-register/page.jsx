import LowrateAlasteraRegisterKeywordPage, { generateMetadata } from './lowrate-alastera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAlasteraRegisterKeywordPage />;
}
