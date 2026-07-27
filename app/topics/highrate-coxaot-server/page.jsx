import HighrateCoxaotServerKeywordPage, { generateMetadata } from './highrate-coxaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCoxaotServerKeywordPage />;
}
