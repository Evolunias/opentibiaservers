import CoxaotRetroServerGermanyKeywordPage, { generateMetadata } from './coxaot-retro-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotRetroServerGermanyKeywordPage />;
}
