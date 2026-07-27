import LowrateCoxaotRegisterKeywordPage, { generateMetadata } from './lowrate-coxaot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCoxaotRegisterKeywordPage />;
}
