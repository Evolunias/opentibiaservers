import LowrateCoxaotServerKeywordPage, { generateMetadata } from './lowrate-coxaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCoxaotServerKeywordPage />;
}
