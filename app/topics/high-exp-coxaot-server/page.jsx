import HighExpCoxaotServerKeywordPage, { generateMetadata } from './high-exp-coxaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpCoxaotServerKeywordPage />;
}
