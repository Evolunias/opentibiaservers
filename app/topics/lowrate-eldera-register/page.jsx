import LowrateElderaRegisterKeywordPage, { generateMetadata } from './lowrate-eldera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateElderaRegisterKeywordPage />;
}
