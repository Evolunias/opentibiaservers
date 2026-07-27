import TibianusRegisterKeywordPage, { generateMetadata } from './tibianus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusRegisterKeywordPage />;
}
