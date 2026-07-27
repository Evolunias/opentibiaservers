import NoResetCoxaotClientKeywordPage, { generateMetadata } from './no-reset-coxaot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCoxaotClientKeywordPage />;
}
