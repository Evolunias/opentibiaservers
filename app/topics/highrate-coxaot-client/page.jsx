import HighrateCoxaotClientKeywordPage, { generateMetadata } from './highrate-coxaot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCoxaotClientKeywordPage />;
}
