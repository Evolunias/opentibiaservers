import LowExpCoxaotServerKeywordPage, { generateMetadata } from './low-exp-coxaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpCoxaotServerKeywordPage />;
}
