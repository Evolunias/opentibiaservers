import LowrateAmeriaRegisterKeywordPage, { generateMetadata } from './lowrate-ameria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAmeriaRegisterKeywordPage />;
}
