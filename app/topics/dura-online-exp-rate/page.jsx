import DuraOnlineExpRateKeywordPage, { generateMetadata } from './dura-online-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineExpRateKeywordPage />;
}
