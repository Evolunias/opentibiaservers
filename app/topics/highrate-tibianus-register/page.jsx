import HighrateTibianusRegisterKeywordPage, { generateMetadata } from './highrate-tibianus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibianusRegisterKeywordPage />;
}
