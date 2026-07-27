import LowrateOlderaRegisterKeywordPage, { generateMetadata } from './lowrate-oldera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOlderaRegisterKeywordPage />;
}
