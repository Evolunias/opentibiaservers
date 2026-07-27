import HighrateCoxaotLoginKeywordPage, { generateMetadata } from './highrate-coxaot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCoxaotLoginKeywordPage />;
}
