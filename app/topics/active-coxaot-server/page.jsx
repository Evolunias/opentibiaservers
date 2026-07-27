import ActiveCoxaotServerKeywordPage, { generateMetadata } from './active-coxaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCoxaotServerKeywordPage />;
}
